export const mapTicketEscalationsData = (escalations) => {
  return {
    new: {
      title: 'New',
      variant: 'info',
      data: escalations.filter((escalation) => escalation.category === 'new'),
    },
    manager_feedback: {
      title: 'Manager Feedback',
      variant: 'primary',
      data: escalations.filter(
        (escalation) => escalation.category === 'manager_feedback',
      ),
    },
    processing: {
      title: 'Processing',
      variant: 'warning',
      data: escalations.filter(
        (escalation) => escalation.category === 'processing',
      ),
    },
    awaiting_feedback: {
      title: 'Awaiting Feedback',
      variant: 'error',
      data: escalations.filter(
        (escalation) => escalation.category === 'awaiting_feedback',
      ),
    },
    approved: {
      title: 'Approved',
      variant: 'success',
      data: escalations.filter(
        (escalation) => escalation.category === 'approved',
      ),
    },
  };
};
