import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import findAction from '../redux/actions/finder.js';

const Finder = ({ findAction: find, finder }) => {
  const [submitting, setSubmitting] = useState(false);
  const [number, setNumber] = useState('');
  const [successAction, setSuccessAction] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (finder.status === 'find_numbers_success') {
      setSubmitting(false);
      setNumber('');
      setError('');
      return setSuccessAction(true);
      // console.log(finder.data);
    }

    if (finder.status === 'find_numbers_failed') {
      setSubmitting(false);
      setSuccessAction(false);
      return setError(finder.error.message);
    }
    return undefined;
  }, [finder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      number,
    };

    if (!number) {
      return setError('Please enter the upper limit');
    }
    setError('');
    setSubmitting(true);
    return find(data);
  };

  return (
    <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
        <div className="form-div col-lg-4 col-md-6 mol-sm-10 px-3 py-5 mt-5 login-div">
            <div className="text-center">
                <span className="login-span">REVERSIBLE NUMBERS FINDER</span> <br/>
            </div>
            <form action="">
            <div className="form-group mt-3">
                <div className="input-group">
                <input
                    type="text"
                    className="form-control rounded no-shadow"
                    placeholder="Enter the upper limit!"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                </div>
            </div>
            <div className="form-group text-center mt-5">
                {submitting ? (<button
                    type="button"
                    className="form-control btn submit-btn rounded px-5 mt-2 cursor-disabled"
                    disabled
                >
                    Find the numbers
                </button>) : (<button
                    type="button"
                    className="form-control btn rounded submit-btn px-5 mt-2"
                    onClick={handleSubmit}
                >
                    Find the numbers
                </button>)
                }
            </div>
            <div className="form-group mt-3">
            {error ? (
                    <p className="text-danger text-center font-weight-bold text-font-15">
                      {error}
                    </p>
                  ) : null}
            {successAction ? (
              <p className="text-success text-center font-weight-bold text-font-15">
              {finder.message}
            </p>
            ) : null
            }
            </div>
            <div className="form-group mt-3 mx-auto">
              {successAction ?
              finder.data.map((result) => (
                <div className="text-center" key={result}>
                  <span>{result}</span><br />
                </div>
              )) : null
            }
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

Finder.propTypes = {
    findAction: PropTypes.func.isRequired,
    finder: PropTypes.objectOf(PropTypes.any),
  };
  
  const mapStateToProps = ({ finder }) => ({ finder });
  
  export default connect(mapStateToProps, { findAction })(Finder);
  