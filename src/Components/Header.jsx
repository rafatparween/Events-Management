import Image from 'next/image';

const categories = [
  { id: 1, title: 'Corporate Events', image: '/corporate.jpg' },
  { id: 2, title: 'Weddings', image: '/wedding.jpg' },
  { id: 3, title: 'Birthday Parties', image: '/birthday.jpg' },
  { id: 4, title: 'Product Launches', image: '/product-launch.jpg' },
  { id: 5, title: 'Music Concerts', image: '/concert.jpg' },
  { id: 6, title: 'Workshops', image: '/workshop.jpg' },
  { id: 7, title: 'Seminars', image: '/seminar.jpg' },
  { id: 8, title: 'Exhibitions', image: '/exhibition.jpg' },
];

function Header() {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-8">
      <div className="flex items-center space-x-4 animate-marquee">
        {[...categories, ...categories].map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="relative w-full h-36">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-sm font-medium text-gray-800 mt-2">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
