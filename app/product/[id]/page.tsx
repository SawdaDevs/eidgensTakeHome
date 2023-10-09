import Card from "@/components/Card";

export default function ProductPage({ params }: { params: { id: number } }) {
    return (
        <>
            <p className="text-violet-600">HELLO {params.id}</p>
        </>
    );
  }