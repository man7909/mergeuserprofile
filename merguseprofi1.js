function mergeProfile() {
    const user = { name: "Riya" };
    const details = { age: 21 };

    return { ...user, ...details };
}

module.exports = mergeProfile;