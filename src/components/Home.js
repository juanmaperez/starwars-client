import classnames from 'classnames';
import { fetchRoots, fetchResource } from '../actions';
import sentenceCase from 'sentence-case';
import {
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './List'
import Loading from './Loading'

const Home = () => {
	const dispatch = useDispatch();
	const roots = useSelector(state => state.roots);
	const resources = useSelector(({resources}) => resources);
	const favourite = useSelector(({favourite}) => favourite);
	const [tab, setTab] = useState(() => favourite);

	
	useEffect(() => {
		dispatch(fetchRoots());
	}, [dispatch]);


	useEffect(() => {
		if(tab){
			dispatch(fetchResource(tab))
		}
	}, [tab, dispatch]);
	
	const keys = Object.keys(roots.payload || {});
	
	return (
		<div>
			<h1>{'My little Star Wars app 👾'}</h1>

			{roots.payload && (
				<div className={'mt-3'}>
					<Nav tabs>
						{keys.map(k => (
							<NavItem key={k}>
								<NavLink
									className={classnames({ active: tab === k })}
									onClick={() => setTab(k)}
								>
									{sentenceCase(k)}
								</NavLink>
							</NavItem>
						))}
					</Nav>
							
					{ resources.isLoading 
						 ? <Loading/>
						 : <List tab={tab} resources={resources} keys={keys}/>
					}
			
				</div>
			)}
		</div>
	);
};

export default Home;
