function skillsMember () {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/components/member/skills-member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl'
    };
}