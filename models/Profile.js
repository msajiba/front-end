const mongoose = require('mongoose');
const crypto = require('crypto');
 
const profileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            max: 32
        },
        email: {
            type: String,
            trim: true,
            lowercase: true
        },
        address: {
            type: String,
            trim: true,
            
        },
        city: {
            type: String,
            trim: true,
        
        },
        country: {
            type: String,
            trim: true,
        
        },
        post_code: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        user_id_no: {
            type: String,
            trim: true,
        },
      
    },
    { timestamps: true }
);
 


 
const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;