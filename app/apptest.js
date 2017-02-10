describe('Test my app', function () {
    beforeEach(module('app'));

    describe("Test Controllers", function () {
        var controller, myctrl;
        var scope = {};
        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            controller = _$controller_;
        }));

        describe('suite for Myctrl', function () {
            beforeEach(inject(function () {
                myctrl = controller('myctrl', { $scope: scope });
            }))

            it("should be defined", function () {
                expect(myctrl).toBeDefined(true);
            })

            it('$scope.name should ankit', function () {
                expect(scope.name).toEqual('ankit');
            });

            it('$scope.name should lokesh', function () {
                expect(scope.name).toEqual('lokesh');
            });
        });

        describe('suite for Calc Ctrl', function () {
            beforeEach(inject(function () {
                var calcCtrl = controller("calcCtrl", { $scope: scope })
            }));
            it("sum for 5+6 should return 11", function () {
                scope.a = 5;
                scope.b = 6;
                expect(scope.sum()).toEqual(11);
            });

            it("sum of 6+6 should return 12", function () {
                scope.a = 6;
                scope.b = 6;
                expect(scope.sum()).toEqual(12);
            });
        })
    });

    describe("Test Service", function () {
        it("Spec for service")
            
    })
});