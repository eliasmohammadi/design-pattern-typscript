import {CommandManager} from "./CommandManager";
import {UserService} from "./service";
import {User} from "./user.model";

const commandManager = new CommandManager()
const userService = new UserService(commandManager)

userService.insertUser(new User(
    "elias",
    "backend developer"
))

userService.updateUser(
    new User("elias", "backend developer"),
    new User("elias", "software Engineer")
)