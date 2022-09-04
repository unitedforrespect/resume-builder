import { Divider, styled, alpha } from '@mui/material';
import Link from '@mui/material/Link';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';

import { TemplateSlider } from './TemplatesSlider';

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.resume[800],
  borderColor: theme.palette.resume[100],
  ':hover': {
    borderColor: theme.palette.resume[800],
    backgroundColor: alpha(theme.palette.resume[800], 0.04),
  },
}));

export const TemplateSelect = () => {
  return (
    <div className={`h-[459px] w-[600px] bg-white flex flex-col px-10 py-[23px] shadow-2xl`}>
      <TemplateSlider />
      <Divider />
      <span className="text-resume-800 font-bold text-lg my-[14px]">
        Want to build your own template?
      </span>
      <div>
        <Link
          href="https://github.com/sadanandpai/resume-builder"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          <OutlinedButton>Contribute on Github</OutlinedButton>
        </Link>
      </div>
    </div>
  );
};
