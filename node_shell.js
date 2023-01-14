const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'80db7d83-f269-4dc9-88ff-7783323ef89c'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
