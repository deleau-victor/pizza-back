"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_instance_1 = __importDefault(require("./utils/prisma_instance"));
const app = (0, express_1.default)();
app.listen(4000);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.json(yield prisma_instance_1.default.pizza.findMany({
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
    }));
}));
console.log("Running API at http://localhost:4000/");
