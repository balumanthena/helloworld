import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dishes = [
  { name: "Butter Chicken", desc: "Creamy tomato sauce with tender chicken", price: "₹350" },
  { name: "Paneer Tikka", desc: "Grilled paneer cubes with spices", price: "₹280" },
  { name: "Biryani", desc: "Aromatic basmati rice with spices", price: "₹320" },
];

export default function MenuPage() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold text-center text-[#b02a30] mb-8">Our Menu</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <Card key={dish.name} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>{dish.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{dish.desc}</p>
              <p className="mt-2 font-bold">{dish.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
