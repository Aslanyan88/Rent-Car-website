"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface BookCarDialogProps {
  carName: string;
}

export function BookCarDialog({ carName }: BookCarDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contact,
          carName
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      toast.success("Request sent successfully! We'll contact you soon.");
      setOpen(false);
      setContact({ name: '', email: '', phone: '' }); 
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200">
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#5937E0] rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-semibold">Request a Call Back - {carName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={contact.name}
              onChange={(e) => setContact(prev => ({ ...prev, name: e.target.value }))}
              required
              disabled={loading}
              className="bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={contact.email}
              onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
              required
              disabled={loading}
              className="bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={contact.phone}
              onChange={(e) => setContact(prev => ({ ...prev, phone: e.target.value }))}
              required
              disabled={loading}
              className="bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-200"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              'Request a Call Back'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}