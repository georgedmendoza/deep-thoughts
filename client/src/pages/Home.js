import React from 'react';
import { useQuery } from '@apollo/client';  // hooks to make requeset to GraphQL
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request - loading indicates if request isn't done yet
  // once done it stores in data variable
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // if datat exists dave to thoughts constant, if data undefined save empty array to thoughts const
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
          </div>
      </div>
    </main>
  );
}

export default Home;
