/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";

import fuLogger from '../../core/common/fu-logger';
import EventsView from '../../memberView/events/events-view';


function EventsContainer() {
	const itemState = useSelector((state) => state.pmproject);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
			// dispatch(actions.init());
	}, []);

	fuLogger.log({level:'TRACE',loc:'EventsContainer::render',msg:"Hi there"});
    return (
		<EventsView/>
	);
}

export default EventsContainer;
