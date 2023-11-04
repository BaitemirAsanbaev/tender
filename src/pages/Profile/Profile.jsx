const { store } = useContext(Context);

const Profile = () => {
  return (
    <section>
      <div>
        <button onClick={store.logout}>Logout</button>
      </div>
    </section>
  );
};

export default Profile;
