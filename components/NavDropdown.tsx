"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
  showDescriptions?: boolean;
}

export function NavDropdown({ title, items, showDescriptions = false }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 py-2">
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "transform rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-[300px] bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              {item.icon && <item.icon className="h-5 w-5 text-blue-600 mt-0.5" />}
              <div>
                <div className="font-medium text-gray-900">{item.title}</div>
                {showDescriptions && item.description && (
                  <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}