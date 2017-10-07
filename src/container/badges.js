import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MailIcon from 'material-ui-icons/Mail';
import FolderIcon from 'material-ui-icons/Folder';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';
import Badge from '../components/badge';

const styles = theme => ({
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
});

class Index extends Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: '50px' }}>
        <Badge className={classes.badge} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.badge} badgeContent={10} color="accent">
          <FolderIcon />
        </Badge>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
