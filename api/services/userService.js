"use strict";
const User = require("../models/user");

class userService {
    static async registration(data) {
        const userData = new User({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            dob: data.dob,
            password: data.password,
        });
        return await User(userData).save();
      }

    static async checkEmailExist(email) {
        return await User.findOne({ email });
    }
    static async updateUser(id, data) {
      console.log(id, data);
      return await User.findByIdAndUpdate(id, { $set: data });
    }
}
module.exports = userService;