import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import * as colors from '../../utilities/colors';

const ListLoader = ({ size = 'small', color = colors.BLACK }) => {
    return (
        <ActivityIndicator
            color={color}
            size={size}
        />
    )
}

export default ListLoader;

ListLoader.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['small, large'])
};