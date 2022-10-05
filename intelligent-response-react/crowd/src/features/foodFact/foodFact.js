import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Header} from '../../components/header';
import {selectUser} from '../user/userSlice';
import { firstCase, sendRespond } from './foodFactActions';
import {selectQuestion, selectStatus} from './foodFactSlice';

export function FoodFact() {
	const dispatch = useDispatch();
	const question = useSelector(selectQuestion);
	const status = useSelector(selectStatus);
	const {token} = useSelector(selectUser)
	console.log(question)
	useEffect(()=>{
		if(!status){
		dispatch(firstCase(token))
		}
	},[status]);
	const convertToFormData = (label) => {
        const formData = new FormData()
		formData.append( "question_id",question.question_id)
		formData.append( "label", label)
		return formData;
	}
	const handleRespond = (e) =>{
		const data = convertToFormData(e.target.value)
	    console.log(data);
		dispatch(sendRespond({data,token}))
	}
	console.log(token);
	return  (
	  <>
	  <Header />
      <div className="questionCont">
		<p className='question__p'>{question.question_text}</p>
		<img className='question__img' src={question.image_link} />
		<div className='question__respond'>
          <button className='question__btn yes' onClick={handleRespond}value="1">Yes</button>
          <button className='question__btn no' onClick={handleRespond}value="0">No</button>  
	      <button className='question__btn' onClick={handleRespond}value="2">skip</button>
		</div>
      </div>
		</>
  );
}
