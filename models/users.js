import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    }
});

const UserModel = new mongoose.model("users", UserSchema);

//module.exports = UserModel;
export default UserModel;
