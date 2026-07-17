import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DEFAULT_REVIEWS = [
  {
    name: "Rohan Sharma",
    email: "rohan.sharma@gmail.com",
    rating: 5,
    comment: "The PVC cricket bat is outstanding! Perfect bounce and the carbon-fiber texture grip feels extremely premium. Highly recommended for net practice.",
    date: "2026-07-10"
  },
  {
    name: "Amanpreet Singh",
    email: "aman.singh@yahoo.com",
    rating: 5,
    comment: "Direct redirected me to Amazon, got it delivered in 2 days. The rackets are lightweight yet very sturdy. Best sports brand in Jalandhar!",
    date: "2026-07-12"
  },
  {
    name: "Karan Verma",
    email: "karan.verma@outlook.com",
    rating: 4,
    comment: "Using the hex dumbbells and skipping rope daily. Exceptional durability, concrete filling is solid and the vinyl coating protects the floor.",
    date: "2026-07-14"
  }
];

export async function GET() {
  try {
    const client = await clientPromise;
    if (!client) {
      // Graceful fallback to default mock reviews if MongoDB is not connected
      return NextResponse.json(
        DEFAULT_REVIEWS.map((rev, idx) => ({
          id: `mock-${idx}`,
          ...rev
        }))
      );
    }
    const db = client.db("gosai_sports");
    const reviewsCollection = db.collection("reviews");

    // Fetch reviews from MongoDB
    let reviews = await reviewsCollection.find({}).sort({ _id: -1 }).toArray();

    // If database is empty, seed it with default reviews
    if (reviews.length === 0) {
      await reviewsCollection.insertMany(DEFAULT_REVIEWS);
      reviews = await reviewsCollection.find({}).sort({ _id: -1 }).toArray();
    }

    // Convert MongoDB ObjectId to string for JSON serialization
    const formattedReviews = reviews.map(rev => ({
      id: rev._id.toString(),
      name: rev.name,
      email: rev.email,
      rating: rev.rating,
      comment: rev.comment,
      date: rev.date
    }));

    return NextResponse.json(formattedReviews);
  } catch (error) {
    console.error("MongoDB GET Error (falling back to mock reviews):", error);
    return NextResponse.json(
      DEFAULT_REVIEWS.map((rev, idx) => ({
        id: `mock-${idx}`,
        ...rev
      }))
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, rating, comment } = body;

    // Validate inputs
    if (!name || !email || !rating || !comment) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    if (!client) {
      return NextResponse.json(
        { error: "Database connection not configured. Please define MONGODB_URI in your environment." },
        { status: 503 }
      );
    }
    const db = client.db("gosai_sports");
    const reviewsCollection = db.collection("reviews");

    const newReview = {
      name,
      email,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString().split("T")[0],
      createdAt: new Date()
    };

    const result = await reviewsCollection.insertOne(newReview);

    const savedReview = {
      id: result.insertedId.toString(),
      name: newReview.name,
      email: newReview.email,
      rating: newReview.rating,
      comment: newReview.comment,
      date: newReview.date
    };

    return NextResponse.json(savedReview, { status: 201 });
  } catch (error) {
    console.error("MongoDB POST Error:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
