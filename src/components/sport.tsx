import React from 'react';

export default function Sports() {
  return (
    <div className="w-full rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-foreground">Sports & Activities</h2>
        <p className="text-sm text-muted-foreground">My favorite sports and physical activities</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Basketball</h3>
          <p className="text-sm text-muted-foreground">
            Playing basketball regularly helps me stay fit and develop teamwork skills.
          </p>
        </div>
        
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Running</h3>
          <p className="text-sm text-muted-foreground">
            Long-distance running for cardio fitness and mental clarity.
          </p>
        </div>
        
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Swimming</h3>
          <p className="text-sm text-muted-foreground">
            Full-body workout that's great for endurance and muscle strength.
          </p>
        </div>
        
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold">Cycling</h3>
          <p className="text-sm text-muted-foreground">
            Weekend cycling trips for exploration and staying active outdoors.
          </p>
        </div>
      </div>
      
      <div className="mt-4 rounded-lg bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          💪 Staying active helps me maintain focus and energy for coding and problem-solving!
        </p>
      </div>
    </div>
  );
}