import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
//
import { IconButtonAnimate } from '../animate';
import SvgIconStyle from '../SvgIconStyle';

// ----------------------------------------------------------------------

const RootStyle = styled('span')(({ theme }) => ({
  ...cssStyles(theme).bgBlur({ opacity: 0.64 }),
  right: '20px',
  bottom: '20px',
  position: 'fixed',
  marginTop: theme.spacing(-3),
  padding: theme.spacing(0.5),
  zIndex: theme.zIndex.drawer + 2,
  borderRadius: '100%',
  boxShadow: `-12px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.common.black,
    0.36
  )}`,
}));

const DotStyle = styled('span')(({ theme }) => ({
  top: 8,
  width: 8,
  height: 8,
  right: 10,
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: theme.palette.error.main,
}));

// ----------------------------------------------------------------------

ToggleButton.propTypes = {
  notDefault: PropTypes.bool,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};

export default function ToggleButton({ notDefault, open, onToggle }) {
  return (
    <RootStyle>
      {notDefault && !open && <DotStyle />}

      <Tooltip title="Cài Đặt" placement="left">
        <IconButtonAnimate
          color="primary"
          onClick={onToggle}
          sx={{
            p: 1.25,
            transition: (theme) => theme.transitions.create('all'),
            '&:hover': {
              color: 'primary.main',
              bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            },
          }}
        >
          <SvgIconStyle src={`/icons/ic_setting.svg`} sx={{ width: '24px', height: '24px' }} />
        </IconButtonAnimate>
      </Tooltip>
    </RootStyle>
  );
}
