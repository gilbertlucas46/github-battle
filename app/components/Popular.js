var React = require('react');
var PropTypes     = require('prop-types');


var  SelecteLanguage = (props) => {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <div>
        <ul className='languages'>
          {languages.map( (lang) => {
            return (
              <li
                style={lang === props.selectedLanguage ? {color: 'red'} : null}   
                onClick={props.onSelect.bind(null, lang)}
                key={lang}>
                  {lang}
              </li>
            )
          })}
        </ul>
      </div>
  )
}

SelecteLanguage.propTypes = {
  selectedLanguage:PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}


class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState( () => {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {
    

    return (
      <div>
      <SelecteLanguage 
        selectedLanguage= {this.state.selectedLanguage}
         onSelect={this.updateLanguage}
      />
      </div>
    )
  }
}

module.exports = Popular;