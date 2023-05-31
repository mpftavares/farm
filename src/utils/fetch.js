import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../app/fetchSlice';

const useFetch = (url) => {
	const data = useSelector((state) => state.fetch.data);

	let dispatch = useDispatch();

	useEffect(() => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => dispatch(setData(data)))
			.catch((err) => console.log('Error: ', err));
	}, [url, dispatch]);

	return data;
};

export default useFetch;
