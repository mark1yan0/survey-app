import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import copyToClipboard from '../../../lib/helpers/copy-to-clipboard';
import getSurveyIdFromUri from '../../../lib/helpers/get-survey-id-from-uri';

const ModalContent: React.FC<{ uri: string | undefined }> = ({ uri }) => {
  if (!uri) {
    return null;
  }

  const [clicked, setClicked] = useState(false);

  function clickHandler(event: React.MouseEvent<HTMLSpanElement>) {
    copyToClipboard(uri as string);
    setClicked(true);
  }

  return (
    <>
      <h2 className='text-black text-xl m-0'>
        Your survey has been successfully created. Make sure to copy the link to
        share with others
      </h2>
      <motion.section
        layout
        className='h-2/3 flex flex-col justify-center items-center'
      >
        <motion.span
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
          }}
          title='Copy your link'
          className={`bg-primary-main text-white p-2 rounded cursor-pointer ${
            clicked
              ? 'bg-gradient-to-r from-accent-orange to-accent-yellow text-black'
              : ''
          }`}
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
            to={`/survey/${getSurveyIdFromUri(uri)}`}
            className='bg-gradient-to-r from-secondary-light to-accent-yellow p-2 rounded'
          >
            View Your Survey
          </NavLink>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ModalContent;
