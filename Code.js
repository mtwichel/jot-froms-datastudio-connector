var cc = DataStudioApp.createCommunityConnector();

function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.KEY)
    .build();
}

function getConfig() {
  var config = cc.getConfig();

  config
    .newInfo()
    .setId('instructions')
    .setText(
      'Enter npm package names to fetch their download count. An invalid or blank entry will revert to the default value.'
    );

  config
    .newTextInput()
    .setId('package')
    .setName(
      'Enter a single package name or multiple names separated by commas (no spaces!)'
    )
    .setHelpText('e.g. "googleapis" or "package,somepackage,anotherpackage"')
    .setPlaceholder(DEFAULT_PACKAGE)
    .setAllowOverride(true);

  config.setDateRangeRequired(true);

  return config.build();
}