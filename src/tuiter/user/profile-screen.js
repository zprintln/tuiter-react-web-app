import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
    profileThunk,
    logoutThunk,
    updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };
    useEffect(() => {
        dispatch(profileThunk())
        
    }, []);
    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    firstName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    lastName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                </div>
            )}
            <button className="btn btn-danger mt-2"
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}
            >
                {" "}
                Logout
            </button>
            <button className="btn btn-primary mt-2" onClick={save}>Save </button>
        </div>
    );
}
export default ProfileScreen;