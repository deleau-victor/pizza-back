import { PrismaClient } from "@prisma/client"
import Logger, { LogLevels } from "./logger"

declare global {
	// eslint-disable-next-line no-var
	var global_prisma_instance: PrismaClient
}

if (!global.global_prisma_instance) {
	Logger.log("generating new Prisma instance", LogLevels.debug)
	global.global_prisma_instance = new PrismaClient({
		//log: ["query", "info", "warn", "error"],
	})
}

export default global.global_prisma_instance
