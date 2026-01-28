import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  age: number;
}

const UserProfileForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    age: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === 'age' ? parseInt(value) || 0 : value,
    }));
  };

  return (
    <div className="container-left">
      <div className="form-section">
        <h2>Modifier le profil</h2>
        <div className="input-group">
          <label>Nom</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Âge</label>
          <input type="number" name="age" value={user.age} onChange={handleChange} />
        </div>
      </div>

      <div className="display-section">
        <h2>Données saisies</h2>
        <p><strong>Nom :</strong> {user.name || "Non renseigné"}</p>
        <p><strong>Email :</strong> {user.email || "Non renseigné"}</p>
        <p><strong>Âge :</strong> {user.age > 0 ? `${user.age} ans` : "Non renseigné"}</p>
      </div>
    </div>
  );
};

export default UserProfileForm;