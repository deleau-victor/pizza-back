import express from "express"
import prisma_instance from "./utils/prisma_instance"

const app = express()
app.listen(4000)

app.get("/", async (req, res) => {
	res.setHeader("Content-Type", "text/html")
	res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate")
	res.json(
		await prisma_instance.pizza.findMany({
			select: {
				name: true,
				id_pizza: true,
				price: true,
				picture_url: true,
				Compose: {
					select: {
						Ingredient: {
							select: {
								name: true,
								Ingredient_Type: { select: { name: true } },
							},
						},
					},
				},
			},
		}),
	)
})
console.log("Running API at http://localhost:4000/")
