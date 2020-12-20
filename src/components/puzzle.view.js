import PropTypes from 'prop-types';
import { inputPrefix, answerPrefix, logsPrefix } from '../utils/constants';

export const View = ({
  title,
  onSubmit,
  inputValue,
  setInputValue,
  id,
  answer,
}) => {
  return (
    <div>
      <h3 className="is-size-3">{title}</h3>
      <form onSubmit={onSubmit}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Input</label>
              <div className="control">
                <textarea
                  rows="10"
                  value={inputValue}
                  onChange={({ target }) => setInputValue(target.value)}
                  id={`${inputPrefix}${id}`}
                  required
                  className="textarea is-small"
                />
              </div>
            </div>

            <button type="submit" className="button is-primary">
              Do the truffle shuffle
            </button>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Answer</label>
              <div className="control">
                <input
                  type="text"
                  id={`${answerPrefix}${id}`}
                  value={answer}
                  readOnly
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Logs</label>
              <div
                className="control"
                style={{ maxHeight: 200, overflow: 'auto' }}
              >
                <pre id={`${logsPrefix}${id}`} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

View.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  answer: PropTypes.string,
};

View.defaultProps = {
  inputValue: '',
  answer: '',
};
