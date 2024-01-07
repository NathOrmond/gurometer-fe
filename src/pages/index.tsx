import React from 'react';
import { HeaderComponent } from '../app/components/HeaderComponent'; 

export default function Home() {
  const [title, setTitle] = React.useState('Hello World!');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderComponent title={title} />    
    </main>
  )
}
