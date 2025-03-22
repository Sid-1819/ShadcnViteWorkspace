import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <Card className="w-full max-w-lg shadow-2xl rounded-3xl overflow-hidden bg-white">
        <CardHeader>
          <CardTitle >Welcome to ViteShadcnWorkspace!</CardTitle>
          <CardDescription >A modern monorepo with Vite, Shadcn UI, and pnpm workspaces. Build faster and smarter!</CardDescription>
         
        </CardHeader>
      </Card>
    </div>
  );
}

export default App;
