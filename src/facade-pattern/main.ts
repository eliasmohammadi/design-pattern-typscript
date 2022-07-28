import {UserService} from "./service";
import {Client} from "./client";


const userService = new UserService()
const client = new Client(userService)


client.createAccount("user-1")
client.createAccount("user-2")
client.createAccount("user-3")

/**
 * read from DB
 */
client.checkUser("user-1")
client.checkUser("user-2")

/**
 * not found
 * */
client.checkUser("user-4")

/**
 * read from cache
 * */
client.checkUser("user-1")
client.checkUser("user-2")