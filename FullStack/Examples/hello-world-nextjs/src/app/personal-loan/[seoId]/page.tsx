async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if(!res.ok){
    throw new Error('Failed fetching data')
  }

  return res.json();
}

export default async function PLChildPages({ params }: { params: { seoId: string } }) {
  const { seoId } = params;
  const data = await getData()
  
  console.log('Data ===> ',data);

  console.log(' query ===> ', params);

    return (
      <main>
        <p>{seoId}</p>
        Hello, Its PL child pages 
      </main>
    );
  }
  