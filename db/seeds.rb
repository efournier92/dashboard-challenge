# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(
  [
    {
      name: 'Minnie Robertson',
      gender: 'female',
    },
    {
      name: 'Boyd Strickland',
      gender: 'male',
    },
    {
      name: 'Mona Munoz',
      gender: 'female',
    },
    {
      name: 'Arthur May',
      gender: 'male',
    },
    {
      name: 'Rita Richards',
      gender: 'female',
    },
    {
      name: 'Danny Stokes',
      gender: 'male',
    },
    {
      name: 'Marcos Collier',
      gender: 'female',
    },
    {
      name: 'Brandon Graham',
      gender: 'male',
    },
    {
      name: 'Marion Pena',
      gender: 'female',
    },
    {
      name: 'Lauren Buchanan',
      gender: 'female',
    },
  ]
)

escalationTitles = ['Missing part', 'Not perform...', 'Unexpected...', 'Not Techn...']
escalationTypes = [
  { category: 'new', instances_to_create: 25 },
  { category: 'manager_feedback', instances_to_create: 5 },
  { category: 'processing', instances_to_create: 3 },
  { category: 'awaiting_feedback', instances_to_create: 2 },
  { category: 'approved', instances_to_create: 15 },
]

escalationTypes.each do |type|
  type[:instances_to_create].times do
    TicketEscalation.create(
      [
        {
          user_id: rand(1..User.count),
          title: escalationTitles.sample,
          category: type[:category],
        }
      ]
    )
  end
end
