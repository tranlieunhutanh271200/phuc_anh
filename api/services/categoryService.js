"use strict"

const Category = require("../models/category");

class categoryService{
    static async addCategory(data) {
        // const productionData = new Production({
        //     name: data.name,
        //     founder: data.founder,
        //     foundingdate: data.foundingdate,
        //     country: [
        //         {
        //         _id: new mongoose.Types.ObjectId(),
        //         name: data.country
        //         }
        //         ]
        // });
        //console.log(data);
        return await Category(data).save();
    }
    static async checkExistCategory(name){
        return await Category.findOne( { name });
    }
    static async updateCategory(id, data) {
        console.log(id, data);
        return await Category.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteCategory(id) {
        console.log(id);
        return await Category.findByIdAndDelete(id);
    }
    static async getById(id) {
        return await Category.findById(id);
      }
    static async getAll() {
        return await Category.find({});
      }
    static async getAlllimit2() {
        return await Category.find({}).limit(2);
      }
}

module.exports = categoryService;