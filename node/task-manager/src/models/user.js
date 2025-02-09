import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true
},
    email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid!')
        }
    },
    trim: true,
    lowercase: true
},
password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
        if (value.toLowerCase().includes('password')) {
            throw new Error('Password cannot contain "password"!')
        }
    }
}})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    
    if (!user) {
        throw new Error('Unable to login')
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    
    return user
}

userSchema.pre('save', async function(next){
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

export default User