import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Mặt bằng anh Hải',
  'Mặt bằng anh Hải chợ bà  Bà Chẻo',
  'Mặt bằng anh Hải Vincom',
  'Chuỗi mặt bằng giá rẻ Landmark',
  'Shophouse Nam Kỳ Khởi Nghĩa',
  'Ki ốt giá rẻ',
];

const posts = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/kiosk_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
