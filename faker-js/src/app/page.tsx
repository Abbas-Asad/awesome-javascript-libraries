import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName();  
const randomName2 = faker.person.fullName();  // If you want another name 
const randomEmail = faker.internet.email();

export default function Home() {
  return (
    <main>
      <p>Name: {randomName}</p>
      <p>Email: {randomEmail}</p>
    </main>
  );
}
