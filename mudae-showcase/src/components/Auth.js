import pb from './pocketbase';

export default function App() {
    return (
        <>
            <h1>Logged In: {pb.authStore.isValid.toString()}</h1>

            <form>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />

                <button type="submit">Login</button>
            </form>
        </>
    );
}
