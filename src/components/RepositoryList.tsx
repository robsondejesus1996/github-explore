import { RepositoryItem } from "./RepositoryItem";



import "../styles/repositories.scss";
import { useState, useEffect } from "react";


interface Repository {
    name: string;
    description: string;
    html_url: string;


}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/robsondejesus1996/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1 className="h1-titulo">Lista de repositorios</h1>

            <ul>
                {repositories.map((repository) => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}
            </ul>
        </section>
    );
}