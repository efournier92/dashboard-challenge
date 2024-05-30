export const getAvatarUrl = (id, gender) => {
  const validGenders = ['male', 'female'];

  const genderIdentifiersMap = {
    male: 'men',
    female: 'women',
  };

  if (!validGenders.includes(gender.toLowerCase())) gender = validGenders[0];

  return `https://randomuser.me/api/portraits/${genderIdentifiersMap[gender]}/${id}.jpg`;
};
