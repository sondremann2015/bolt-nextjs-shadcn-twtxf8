import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
}

export function ServiceCard({ title, description, icon: Icon, imageSrc }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="flex flex-row items-center gap-2 pt-6">
        <Icon className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}