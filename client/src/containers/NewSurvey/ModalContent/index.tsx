import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import copyToClipboard from '../../../lib/helpers/copyToClipboard';
import getSurveyIdFromUri from '../../../lib/helpers/getSurveyIdFromUri';
import ROUTES from '../../../lib/constants/routes';
import makeRoutePath from '../../../lib/helpers/makeRoutePath';
import { twMerge } from 'tailwind-merge';

const ModalContent = ({ uri }: { uri: string | undefined }) => {
  if (!uri) {
    return null;
  }

  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    copyToClipboard(uri as string);
    setClicked(true);
  }

  return (
    <>
      <h2 className='m-0 text-xl text-black'>
        Your survey has been successfully created. Make sure to copy the link to
        share with others
      </h2>
      <motion.section
        layout
        className='flex h-2/3 flex-col items-center justify-center'
      >
        <motion.span
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
          }}
          title='Copy your link'
          className={twMerge(
            'bg-primary-main cursor-pointer rounded p-2 text-white',
            clicked
              ? 'bg-gradient-to-r from-accent-orange to-accent-yellow text-black'
              : ''
          )}
          onClick={clickHandler}
        >
          {uri}
        </motion.span>

        {clicked && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-black'
          >
            Link copied to clipboard
          </motion.p>
        )}

        <motion.div layout className='mt-10'>
          <NavLink
            to={makeRoutePath(ROUTES.Survey, getSurveyIdFromUri(uri))}
            className='from-secondary-light to-accent-yellow rounded bg-gradient-to-r p-2'
          >
            View Your Survey
          </NavLink>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ModalContent;
