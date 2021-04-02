import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Category } from '../interfaces';
import { gql, useQuery } from '@apollo/client';

interface GetCategoriesData {
  getCategories: Category[]
}

const getCategories = gql`
  query {
    getCategories {
      id,
      name
    }
  }
`;

const Home = () => {

  const { loading, error, data } = useQuery<GetCategoriesData>(getCategories);

  if (loading) return <code> LOADING... </code>
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>GraphQL Client</title>
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          GraphQL Client
        </p>
        <div>
          {data &&
            data.getCategories.map(category => (
              <p key={category.id}> <em>{category.id}</em> {category.name} </p>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Home;