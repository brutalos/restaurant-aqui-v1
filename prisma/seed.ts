import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  const categories = [
    { name: 'Entradas', slug: 'entradas' },
    { name: 'Tacos', slug: 'tacos' },
    { name: 'Burritos', slug: 'burritos' },
    { name: 'Bowls & Ensaladas', slug: 'bowls-ensaladas' },
    { name: 'Postres', slug: 'postres' },
    { name: 'Getränke', slug: 'getraenke' },
  ]

  for (const cat of categories) {
    await prisma.category.create({ data: cat })
  }

  const catEntradas = await prisma.category.findUnique({ where: { slug: 'entradas' } })
  const catDrinks = await prisma.category.findUnique({ where: { slug: 'getraenke' } })

  if (catEntradas) {
    await prisma.product.createMany({
      data: [
        { name: 'PATATAS BRAVAS', description: 'Frittierte Kartoffeln mit hausgemachter Salsa Bravo und Aioli-Mayonnaise', price: 7.90, categoryId: catEntradas.id, imageUrl: '/images/tacos-typical-mexican-food-see-646bb0ff12ad.jpg' },
        { name: 'TOTOPOS', description: 'Knusprige Tortilla- Chips mit hausgemachter Guacamole, Salsa Roja und Sour Cream', price: 5.90, categoryId: catEntradas.id, imageUrl: '/images/mexican-food-featuring-tacos-b-ae773069e87b.jpg' },
        { name: 'NACHOS CON QUESO', description: 'Knusprige Tortilla-Chips mit Kidneybohnenmus, überbacken mit Käse-Mix', price: 7.90, categoryId: catEntradas.id, imageUrl: '/images/mexican-food-featuring-tacos-n-80e03838e806.jpg' },
        { name: 'ELOTE', description: 'Gegrillte Maiskolben mit Sour Cream, Feta und Smokey Rub', price: 5.90, categoryId: catEntradas.id, imageUrl: '/images/tischansicht-13feb9344a24.jpg' },
      ]
    })
  }

  if (catDrinks) {
    await prisma.product.createMany({
      data: [
        { name: 'Soda Zitron 0,25l', description: 'Jugendgetränk', price: 2.60, categoryId: catDrinks.id },
        { name: 'Soda Himbeere 0,25l', description: 'Jugendgetränk', price: 2.60, categoryId: catDrinks.id },
        { name: 'Espresso', description: 'Hot Drink', price: 2.90, categoryId: catDrinks.id },
      ]
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
